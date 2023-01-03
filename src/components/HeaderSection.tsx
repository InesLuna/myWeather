

interface HeaderSectionProps {
    location: string,
    date: string,
}

export const HeaderSection = (props: HeaderSectionProps) => {

    const { location, date } = props;

  return (
    <div className='flex justify-between py-5'>
        <p className="text-3xl font-black text-gray-900">{date}</p>
        <p className="text-3xl font-black text-gray-900 text-right">{location}</p>
    </div>
  );
};
