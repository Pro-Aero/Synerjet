import Image from "next/image";

import { FormComponent } from "./credentials/sign-in-form";

export const runtime = "edge";

export default function SignIn() {
  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-3 xl:min-h-[715px]">
      <div className="flex justify-center py-20 col-span-1 ">
        <div className="mx-auto w-[350px] h-full">
          <div className="flex flex-col text-center mb-10">
            <Image
              src="/Synerjet_hor_light-backgrounds.png"
              alt="Image"
              width="160"
              height="160"
              className="object-cover mx-auto dark:brightness-[0.2] dark:grayscale"
            />
            <p className="text-balance text-muted-foreground mt-8">
              Entre com sua conta
            </p>
          </div>
          <FormComponent />
        </div>
      </div>
      <div className="hidden bg-muted lg:block col-span-2">
        <Image
          src="/synerjetBG.jpg"
          alt="Image"
          width="1200"
          height="1200"
          className="dark:brightness-[0.2] dark:grayscale w-full h-full"
        />
      </div>
    </div>
  );
}
