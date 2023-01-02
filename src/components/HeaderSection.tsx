

interface HeaderSectionProps {
    location: string
}

export const HeaderSection = (props: HeaderSectionProps) => {

    const { location } = props;

    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

  return (
    <div className='flex justify-around p-5'>
        <p className="text-3xl font-black text-gray-900">{day+'/'+month+'/'+year}</p>
        <p className="text-3xl font-black text-gray-900">{location}</p>
    </div>
  );
};
