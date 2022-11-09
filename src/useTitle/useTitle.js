import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Green Consult`
    }, [title])
}
export default useTitle;