import { render, waitFor } from "@testing-library/react-native"
import React from "react"
import { Text } from "react-native"
import { CacheContainer } from "."

describe("Container", () => {
  it("renders", async () => {
    // Arrange
    const text = "Test"

    // Act
    const { getByText, queryByText } = render(
      <CacheContainer>
        <Text>{text}</Text>
      </CacheContainer>,
    )
    await waitFor(() => queryByText(text))
    const received = getByText(text)

    // Assert
    expect(received).toBeDefined()
  })
})
