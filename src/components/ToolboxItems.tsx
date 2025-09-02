import { twMerge } from "tailwind-merge";
import { TechIcon } from "./TechIcon"

export const Toolboxitems = ({items, className, itemsWrapperClassName}:
    {items: { title: string; iconType: React.ElementType; }[]; className?: string; itemsWrapperClassName?: string;}
) => {
    return (
        <div className={twMerge("flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]", className)}>
            <div className={twMerge("flex flex-none gap-4 py-2 min-w-max", itemsWrapperClassName)}>
                {/* Double the items for seamless animation */}
                {items.map((item, index) => (
                    <div key={`first-${item.title}-${index}`} className="inline-flex items-center gap-2 py-2 px-3 bg-white/5 rounded-lg border border-white/10">
                        <TechIcon component={item.iconType} />
                        <span className="font-semibold text-white text-xs whitespace-nowrap">
                            {item.title}
                        </span>
                    </div>
                ))}
                {items.map((item, index) => (
                    <div key={`second-${item.title}-${index}`} className="inline-flex items-center gap-2 py-2 px-3 bg-white/5 rounded-lg border border-white/10">
                        <TechIcon component={item.iconType} />
                        <span className="font-semibold text-white text-xs whitespace-nowrap">
                            {item.title}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}