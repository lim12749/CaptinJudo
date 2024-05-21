import Image from "next/image";
import ImageSlider from "@/components/index";


export default function Home() {
  return (
      <main className="bg-gray-100 sm:bg-red-100 md:bg-green-100 lg:bg-cyan-100 xl:bg-purple-100
     2xl:bg-orange-100 min-h-screen flex items-center justify-center ">
        <header className="w-full fixed top-0 z-50 bg-gray-800  text-white py-4 flex justify-between items-center">
          <p className="text-2xl font-bold ml-4"> CPT 캡틴 유도관</p>
          <nav>
            <ul className="flex space-x-4 mr-4">
              <li><p className="text-xs">캡틴 소개</p></li>
              <li><p className="text-xs">프로필</p></li>
              <li><p className="text-xs">목표</p></li>
              <li><p className="text-xs">시설 사진</p></li>
              <li><p className="text-xs">오시는길</p></li>
            </ul>
          </nav>
        </header>

        <div className="flex flex-col w-full">
          <div className="bg-slate-600 h-screen flex items-center justify-center">
            <div className="text-blue-600 text-2xl">
              <p>캡틴 유도관 </p>
              <p> 운동 프로그램</p>
            </div>
          </div>
          <div className="bg-orange-200 h-screen flex items-center justify-center">
            <div className="flex flex-col items-center p-5">
              <div className="
              bg-white text-black rounded-2xl w-full shadow-lg p-5 ">관장님 소개
                <Image src="/img/Profile.jpg" alt="test" width={300} height={300}/>
                <p className="text-xs font-medium py-5">[용. 인. 시. 최. 초. 부. 부. 유. 도. 장]

                  용인대 유도학과 출신의 젊은 부부가 함께 운영하는 유도장입니다.
                  두 아이의 부모로서 항상 부모의 마음으로 지도하고 있습니다.

                  여자 관장님의 지도 아래 유도를 배우고 싶은 여성분들이 있다면 꼭 연락 주세요!!!
                  (여자 관장님이 직접 문의를 받고 있으니 부담 없이 문의하세요!!)

                  707특수임무단 예비역 대위(ROTC 55기) 출신 관장님의 체계적인 운동 프로그램으로 유도뿐만 아니라 체력증진 및 다이어트가 가능합니다.

                  언제든 문의하시면 친절하게 상담 도와드리겠습니다.

                  즐겁고 건강한 유도 함께해요!

                  카톡 채널 - 용인대 캡틴 유도</p>
              </div>

            </div>
          </div>
          <div className="bg-red-200 h-screen flex items-center justify-center">
            <div className="text-orange-500 text-2xl"> 채육관 목표
              <p> 다이어트 </p>
              <p> 호신술 </p>
            </div>
          </div>
          <div className="bg-white h-screen flex items-center justify-center">
            <div className="text-orange-500 text-2xl">
              <p> 시설 사진 </p>
              <ImageSlider/>
            </div>
          </div>
          <div className="bg-green-300-200 h-screen flex items-center justify-center">
            <div className="text-orange-500 text-2xl"> 오시는길
            </div>
          </div>
        </div>
      </main>
  );
}
