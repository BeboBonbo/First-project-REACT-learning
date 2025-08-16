import { useState } from "react";
import { places } from "./data.js";
import { getImageUrl } from "./utils.js";
import { SizeContext, PlaceContext } from "./Context.js";
import { useContext } from "react";

export default function Content() {
  const [isLarge, setIsLarge] = useState(false);
  const imageSize = isLarge ? 150 : 100;
  return (
    <SizeContext.Provider value={imageSize}>
      <label>
        <input
          type="checkbox"
          checked={isLarge}
          onChange={(e) => {
            setIsLarge(e.target.checked);
          }}
        />
        Use large images
      </label>
      <hr />
      <List />
    </SizeContext.Provider>
  );
}

function List() {
  const listItems = places.map((place) => (
    <PlaceContext.Provider value={place}>
      <li key={place.id}>
        <Place />
      </li>
    </PlaceContext.Provider>
  ));
  return <ul>{listItems}</ul>;
}

function Place() {
  const place = useContext(PlaceContext);
  return (
    <>
      <PlaceImage />
      <p>
        <b>{place.name}</b>
        {": " + place.description}
      </p>
    </>
  );
}

function PlaceImage() {
  const imageSize = useContext(SizeContext);
  const place = useContext(PlaceContext);
  return (
    <img
      src={getImageUrl(place)}
      alt={place.name}
      width={imageSize}
      height={imageSize}
    />
  );
}
