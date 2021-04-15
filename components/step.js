export default function Step({ icon, text }) {
  return (
    <div className="h-48 w-full rounded-lg bg-blue-100 p-8 space-y-8 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
      <img src={icon} alt={text} className="w-16 h-16" />
      <p className="text-xl font-montserrat font-medium">{text}</p>
    </div>
  )
}
