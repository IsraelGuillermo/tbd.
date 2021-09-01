import { render } from "@testing-library/react-native"
import React from "react"
import { Card } from "./Card"

describe("Card", () => {
  it("name prop is rendered", () => {
    // Arrange
    const message = "Hi, my name is Card!"

    // Act
    const { getByText } = render(<Card name="Card" />)
    const received = getByText(message)

    // Assert
    expect(received).toBeDefined()
  })
})
