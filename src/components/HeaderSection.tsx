

interface HeaderSectionProps {
    location: string,
    date: string,
}

export const HeaderSection = (props: HeaderSectionProps) => {

    const { location, date } = props;
    const printDate = date.split(' ')

  return (
    <div className='flex justify-between flex-wrap'>
        <p className="text-2xl md:text-3xl font-black text-gray-900">{printDate[0]}</p>
        <p className="text-2xl md:text-3xl font-black text-gray-900 text-right capitalize">{location}</p>
    </div>
  );
};
