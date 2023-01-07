import { renderHook, act } from "@testing-library/react"
import useName from "./hooks"

describe('Test something', () => { 
    
    it("should run", () => {

        const {result} = renderHook(() => useName())
        
        const [name, setName] = result.current;

        act(() => (setName as React.Dispatch<React.SetStateAction<string>>)("Bachar"));

        expect(result.current[0]).toBe("Bachar")
    })
 })