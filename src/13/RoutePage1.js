import { useParams } from "react-router-dom"

export default function RoutePage1() {
    const item = useParams().item; // item은 Route에서 정한 경로에 포함된 변수명
    return (
        <div>
            RoutePage1 : {item}
        </div>
    )
}
