function Button(props){
    return (
        // eslint-disable-next-line react/prop-types
        <button className="text-professional-icons bg-social-icons text-[1.5rem] font-semibold w-[20rem] py-[0.5rem] rounded-[0.625rem] flex justify-center items-center relative hover:bg-theme-circle hover:text-text-selection hover:scale-[1.1] ease-in-out duration-300">{props.icon} {props.buttonText}</button>
    );
}

export default Button;