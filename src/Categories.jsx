import React from 'react'
import './Categories.css'

const Categories = () => {
  return (
    <div class="container">
    <h1>Book Categories</h1>
    <ul>
        <li>
            <h2>Fiction</h2>
            <ul class="subcategory">
                <li>Science Fiction</li>
                <li>Fantasy</li>
                <li>Mystery</li>
                <li>Romance</li>
                <li>Self-help</li>
                <li>Science</li>
            </ul>
        </li>
        <li>
            <h2>Children</h2>
            <ul class="subcategory">
                <li>Picture Books</li>
                <li>Early Readers</li>
                <li>Middle Grade</li>
                <li>Young Adult</li>
            </ul>
        </li>
    </ul>
</div>
  )
}

export default Categories
