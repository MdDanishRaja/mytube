import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import LeftNavMenuItem from "./LeftNavMenuItem";
import { categories } from "../utils/constants";
import { Context } from "../context/contextApi";

const LeftNav = () => {
    const { selectedCategory, setSelectedCategory, mobileMenu } =
        useContext(Context);

    const navigate = useNavigate();

    const clickHandler = (name, type) => {
        switch (type) {
            case "category":
            case "home":
                setSelectedCategory(name);
                break;
            case "menu":
                setSelectedCategory(null); // Reset the selectedCategory (if any) when opening the mobile menu
                break;
            default:
                break;
        }
    };

    return (
        <div
            className={`${
                mobileMenu
                    ? "block md:block w-[240px] overflow-y-auto h-full py-4 bg-black absolute md:relative z-10 translate-x-0 transition-all"
                    : "md:block w-[240px] overflow-y-auto h-full py-4 bg-black absolute md:relative z-10 translate-x-[-240px] md:translate-x-0 transition-all"
            }`}
        >
            <div className="flex px-5 flex-col">
                {categories.map((item) => {
                    return (
                        <React.Fragment key={item.name}>
                            <LeftNavMenuItem
                                text={item.type === "home" ? "Home" : item.name}
                                icon={item.icon}
                                action={() => {
                                    clickHandler(item.name, item.type);
                                    navigate("/");
                                }}
                                className={`${
                                    selectedCategory === item.name
                                        ? "bg-white/[0.15]"
                                        : ""
                                }`}
                            />
                            {item.divider && (
                                <hr className="my-5 border-white/[0.2]" />
                            )}
                        </React.Fragment>
                    );
                })}
                <hr className="my-5 border-white/[0.2]" />
                <div className="text-white/[0.5] text-[12px]">
                    Developed By: Danish Sheikh (Prince)
                </div>
            </div>
        </div>
    );
};

export default LeftNav;



