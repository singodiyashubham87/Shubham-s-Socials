function Button(props){
    return (
        // eslint-disable-next-line react/prop-types
        <button className="text-[#00000099] bg-[#D9D9D9CC] text-[1.5rem] font-semibold w-[20rem] py-[0.5rem] rounded-[0.625rem] flex justify-center items-center relative hover:bg-white hover:text-black hover:scale-[1.1] ease-in-out duration-300">{props.icon} {props.buttonText}</button>
    );
}

export default Button;