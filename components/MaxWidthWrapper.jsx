import {cn} from "@/lib/utils";

const MaxWidthWrapper = ({className, children}) => {
  return (
    <div className={cn("mx-2.5 md:mx-5 lg:mx-10", className)}>{children}</div>
  );
};

export default MaxWidthWrapper;
