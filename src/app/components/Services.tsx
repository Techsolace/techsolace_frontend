import React from "react";
import lines from "@/../public/lines-1.png";
import ArrowAnimation from "./arrowAnimation";
import DynamicFormOutlinedIcon from "@mui/icons-material/DynamicFormOutlined";
import TextFieldsOutlinedIcon from "@mui/icons-material/TextFieldsOutlined";
import ScatterPlotOutlinedIcon from "@mui/icons-material/ScatterPlotOutlined";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";

const background = {
  backgroundSize: "cover",
  backgroundColor: "black",
  backgroundImage: `url(${lines.src})` // Ensure to use .src to get the path of the image,
};

const Services = () => {
  return (
    <div style={background}>
      <div className="max-w-[1200px] p-10 m-auto">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex-[1]">
            <div className="flex flex-wrap gap-2 flex-row">
              <h1 className="text-3xl lg:text-5xl font-bold font-Primary text-white">
                Services
              </h1>
              <ArrowAnimation />
            </div>
          </div>
          <div className="flex-[2]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="rounded-xl w-full gap-4 bg-white" id="card">
                <div className="p-10">
                  <div className="flex flex-col gap-5">
                    <div>
                      <div className="p-4 bg-white rounded-full inline-block">
                        <DynamicFormOutlinedIcon className="text-blue-600" />
                      </div>
                    </div>
                    <p className="text-white text-xl font-Secondary">
                      Web / App Development
                    </p>
                    <p className="text-justify font-Secondary text-sm text-zinc-300">
                      Web design encompasses a variety of disciplines and skills
                      in the production and maintenance of websites. The
                      different areas of web design include web graphic design,
                      user interface design, authoring, including standardized
                      code and proprietary software, user experience design, and
                      search engine optimization.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-xl w-full gap-4 bg-white" id="card">
                <div className="p-10">
                  <div className="flex flex-col gap-5">
                    <div>
                      <div className="p-4 bg-white rounded-full inline-block">
                        <TextFieldsOutlinedIcon className="text-blue-600" />
                      </div>
                    </div>
                    <p className="text-white text-xl font-Secondary">
                      Content Writing / SEO
                    </p>
                    <p className="text-justify font-Secondary text-sm text-zinc-300">
                      Content writing involves creating written material for
                      various digital platforms. This includes blog posts,
                      articles, social media posts, website copy, and more. The
                      goal is to provide valuable information, entertain, or
                      persuade the reader.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-xl w-full gap-4 bg-white" id="card">
                <div className="p-10">
                  <div className="flex flex-col gap-5">
                    <div>
                      <div className="p-4 bg-white rounded-full inline-block">
                        <ScatterPlotOutlinedIcon className="text-blue-600" />
                      </div>
                    </div>
                    <p className="text-white text-xl font-Secondary">
                      GFX / Graphics Designing
                    </p>
                    <p className="text-justify font-Secondary text-sm text-zinc-300">
                      Graphic designing involves creating visual content to
                      communicate messages. Designers use typography, imagery,
                      color, and form to craft compelling visual narratives for
                      various mediums, including print, web, and multimedia.
                      Graphic design plays a crucial role in branding,
                      marketing, and communication. It helps businesses
                      establish their identity, attract and engage customers,
                      and convey information effectively.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-xl w-full gap-4 bg-white" id="card">
                <div className="p-10">
                  <div className="flex flex-col gap-5">
                    <div>
                      <div className="p-4 bg-white rounded-full inline-block">
                        <PlayArrowOutlinedIcon className="text-blue-600" />
                      </div>
                    </div>
                    <p className="text-white text-xl font-Secondary">
                      Video Editing / VFX
                    </p>
                    <p className="text-justify font-Secondary text-sm text-zinc-300">
                      Video editing involves manipulating and rearranging video
                      shots to create a new work. VFX refers to the process of
                      creating or manipulating imagery outside the context of a
                      live-action shot in filmmaking and video production. Video
                      editing and VFX are crucial in enhancing storytelling,
                      creating immersive experiences, and bringing imaginative
                      concepts to life. They play a significant role in movies,
                      TV shows, advertisements, and online content.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
