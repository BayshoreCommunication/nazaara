"use client";

import { useState } from "react";
import Fuse from "fuse.js";

// Define your data
const books = [
  {
    title: "Old Man's War",
    author: "John Scalzi",
    tags: ["fiction"],
    other: {
      name: "reja",
    },
  },
  {
    title: "The Lock Artist",
    author: "Steve",
    tags: ["thriller"],
    other: {
      name: "Nasim",
    },
  },
];

export default function MyComponent() {
  const [searchTerm, setSearchTerm] = useState("");

  // Create a new instance of Fuse with your data and options
  const fuse = new Fuse(books, {
    keys: ["title", "author", "tags", "other.name"],
  });

  // Handle input change
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter the data based on the search term
  const filteredData = fuse.search(searchTerm);

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search..."
      />
      <ul>
        {filteredData.map((result) => (
          <li key={result.item.title}>
            {result.item.title} by {result.item.author}
          </li>
        ))}
      </ul>
    </div>
  );
}
