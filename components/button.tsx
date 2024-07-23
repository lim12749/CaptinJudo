"use client"

import { useFormStatus }from "react-dom";

interface ButtonProps{
    text:string;
}

export  default  function Button({text} :ButtonProps)
{
    //hook을 사용하기 위해선 client component로 변경해야하고 사용하는 위치에 자식이어야함.
    //자동으로 부모를 찾을꺼고 내가 action으로 걸어둔 친구를 찾아 action의 pending 상태인지 자동으로 알아냄
    //그래서 hook은 부모 아래에 자식으로 있어야한다.
    const {pending}=useFormStatus();

    return (
        <button disabled={pending} className="primary-btn h-10
    disabled:bg-neutral-400 disabled:text-neutral-300 disabled: cursor-not-allowed">
            {pending ? "로딩 중..." : text}
        </button>
    );
}