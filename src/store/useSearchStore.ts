import { create } from "zustand"

interface SearchStoreTypes {
    searchTerm: string
    handleChange: (value: string) => void
}

export const useSearchStore = create<SearchStoreTypes>((set) => ({
    searchTerm: "",
    handleChange: (value: string) => {
        set({searchTerm: value})
    }
}))