
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="text-center space-y-4 my-10 md:w-3/12 mx-auto ">
            <p className="text-yellow-500">---{heading}---</p>
            <h2 className="text-4xl uppercase border-y-2">{subHeading}</h2>
        </div>
    );
};

export default SectionTitle;