import { TreePalm } from "lucide-react";

export const Navbar = () => {
    return (
        <div className="container flex items-center justify-between fixed w-full top-5 z-40 transition-all duration-300">
            <div className="relative z-10 text-2xl font-bold flex items-center text-primary">
                <TreePalm className="w-6 h-6 mr-2"/> <span className="text-glow">Tree</span>Type
            </div>
        </div>
    );
};
