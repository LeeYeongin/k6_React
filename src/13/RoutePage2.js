import { useSearchParams } from "react-router-dom"

export default function RoutePage2() {
    // 주소에 담겨온 ?뒤 변수값들을 알아서 분류해줌
    const [params] = useSearchParams();

    console.log(params.get('item1'));
    console.log(params.get('item2'));
    return (
        <div>
            RoutePage2
        </div>
    )
}
