import React, { useState } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import "./AddressAutocomplete.css";

function AddressAutocomplete({ setCurrentLocation, setFormData }) {
  const [address, setAddress] = useState("");

  const getPlacesPinCodeById = async (placeId) =>
    new Promise((resolve, reject) => {
      if (!placeId) reject("placeId not provided");

      try {
        new window.google.maps.places.PlacesService(
          document.createElement("div")
        ).getDetails(
          {
            placeId,
            fields: ["address_components", "formatted_address", "name"],
          },
          (details) => {
            var address = "",
              locality = "",
              city = "",
              state = "",
              pincode = "",
              raw_address = "",
              name = "";

            if (details.name) {
              name = details.name;
            }

            if (details.formatted_address) {
              raw_address = details.formatted_address;
            }

            if (name !== "") {
              address = name + ", " + raw_address;
            }

            console.log(details);
            details?.address_components?.forEach((entry) => {
              if (entry.types?.[0] === "administrative_area_level_2") {
                city = entry.long_name;
              }
              if (entry.types?.[0] === "administrative_area_level_1") {
                state = entry.long_name;
              }
              if (entry.types?.[0] === "postal_code") {
                pincode = entry.long_name;
              }
            });
            return resolve({
              address,
              locality,
              city,
              state,
              pincode,
            });
          }
        );
      } catch (e) {
        reject(e);
      }
    });

  const handleSelect = async (value, placeId, suggestion) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    const { address, locality, city, state, pincode } =
      await getPlacesPinCodeById(placeId);

    setFormData((prev) => ({
      ...prev,
      address: address,
      locality: locality,
      district: city,
      state: state,
      pincode: pincode,
      latitude: latLng.lat,
      longitude: latLng.lng,
    }));

    setCurrentLocation(latLng);
    setAddress(value);
  };

  return (
    <div>
      <PlacesAutocomplete
        value={address}
        onChange={(value) => setAddress(value)}
        onSelect={handleSelect}
        styles={{ display: "none" }}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: "Search Places ...",
                className: "location-search-input",
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map((suggestion, index) => {
                const className = suggestion.active
                  ? "suggestion-item--active"
                  : "suggestion-item";
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: "#bbdefb", cursor: "pointer" }
                  : { backgroundColor: "#ffffff", cursor: "pointer" };
                return (
                  <div
                    key={index}
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </div>
  );
}

export default AddressAutocomplete;
