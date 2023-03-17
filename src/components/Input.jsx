export default function Input({ placeholder, backgroundColor, handleChange, value }) {
    return <input placeholder={placeholder} className={`border-[#E7E4EF] border-[1.5px] rounded-xl w-full md:w-[450px] h-[54px] text-lg indent-6 ${backgroundColor}`} onChange={handleChange} value={value}  />
}