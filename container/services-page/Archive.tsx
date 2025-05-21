import { background } from "@/public";
import { achiveItems } from "@/constants";
import { BackgroundImg } from "@/components";
import { TextMask } from "@/animation";

export default function Archive() {
  return (
    <section className="w-full overflow-x-hidden">
      {/* Nuke Blob Animation Container */}
     

      <div className="padding-x w-full">
        <BackgroundImg src={background} />
      </div>
      
      <div className="w-full padding-y">
        <div className="w-full padding-x pt-5 border-t border-[#21212155] flex flex-col md:flex-row justify-between gap-y-5">
          <div className="w-full md:w-1/2">
            <h3 className="paragraph font-medium font-NeueMontreal">
              Nuke in numbers:
            </h3>
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-y-5">
            {achiveItems.map((item) => (
              <div
                className="w-full flex flex-col sm:flex-row justify-between gap-5"
                key={item.id}
              >
                <div className="bg-[#E1E1E1] w-full flex flex-col gap-y-20 rounded-[20px] px-7 py-5">
                  <div className="flex gap-x-2.5 items-center pb-2.5">
                    <h1 className="sub-heading font-normal font-NeueMontreal">
                      <TextMask>{item.title1}</TextMask>
                    </h1>
                  </div>
                  <div className="w-full flex justify-between items-center">
                    <button className="paragraph font-normal font-NeueMontreal">
                      {item.subTitle1}
                    </button>
                  </div>
                </div>
                <div className="bg-[#E1E1E1] w-full flex flex-col gap-y-20 rounded-[20px] px-7 py-5">
                  <div className="flex gap-x-2.5 items-center pb-2.5">
                    <h1 className="sub-heading font-normal font-NeueMontreal">
                      <TextMask>{item.title2}</TextMask>
                    </h1>
                  </div>
                  <div className="w-full flex justify-between items-center">
                    <button className="paragraph font-normal font-NeueMontreal">
                      {item.subTitle2}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}