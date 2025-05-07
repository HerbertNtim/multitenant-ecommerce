import { RefObject } from "react"

const useDropdownPosition = (ref: RefObject<HTMLDivElement | null> | RefObject<HTMLDivElement>) => {
  const getDropdownPosition = () => {
    // Check if anything is missing
    if (!ref.current) {
      return { left: 0, top: 0 }
    }

    // Get the rect of the dropdown
    const rect = ref.current.getBoundingClientRect()
    // Define the dropdown 
    const dropdownWidth = 240

    // Calculate the initial dropdown position
    let left = rect.left + window.scrollX
    const top = rect.bottom + window.scrollY

    // Check if the dropdown would go off the right edge of the screen
    if(left + dropdownWidth > window.innerWidth) {
      // Align to right edge of button instead
      left = rect.right - dropdownWidth + window.scrollX

      // If still off-screen, align to the right edge of the viewport with padding
      if(left < 0) {
        left = window.innerWidth - dropdownWidth - 16
      }
    }

    // Ensure the dropdown is not off the left edge of the screen
    if(left < 0) {
      left = 16
    }

    return {
      left,
      top,  
    }
  }

  return {
    getDropdownPosition,
  }
}

export default useDropdownPosition
