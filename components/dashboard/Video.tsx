
'use client'


interface Props {
    video: string;
}

function Video(props: Props) {

    const {video} = props
  return (
    <div className="flex justify-center items-center md:mt-[15.7rem] ">
    <video
      autoPlay
      loop
      muted
      className="flex justify-center md:absolute md:ml-50 h-[calc(100%_-_6rem)]  md:min-w-[100px]  "
    >
      <source src={video} />
    </video>
  </div>
  )
}

export default Video