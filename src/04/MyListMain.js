import MyList from "./MyList"
import listData from './MyListData.json';

export default function MyListMain() {
    console.log(listData)
    const myItems = listData.map(item => 
        <MyList title = {item.title}
                imgUrl = {item.imgUrl}
                content = {item.content}
                key = {item.title}
        />
    );
    return (
        // 반응형 웹
        // md:grid-cols-2 -> 768px보다 크면 2열 생성
        // lg:grid-cols-3 -> 1024px보다 크면 3열 생성
        <div className="w-10/12 grid grid-cols-1 
                                 md:grid-cols-2 
                                 lg:grid-cols-3 
                                 gap-4">
            {myItems}
        </div>
    )
}
