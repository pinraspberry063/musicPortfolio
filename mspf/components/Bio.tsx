import React from 'react'

function Bio() {
  return (
    <div className="bg-gray-70 text-white py-72 px-6 md:px-20">
        <div className="max-w-5xl mx-auto text-center space-y-6">
            <h2 className="text-5xl font-light uppercase tracking-widest text-gray-300">Bio</h2>

            <p className="text-xl text-gray-20 leading-relaxed">
                Jordan Cobos was born and raised in New Orleans, Louisiana,
                where he found his passion for music through the guitar.
                Determined to turn that passion into a career, he pursued Music
                Industry Studies at Louisiana Tech University, focusing on audio
                engineering. Specializing in recording, tracking, and mixing, he
                works extensively in Ableton and Pro Tools and is currently working
                toward his Pro Tools certification and is eager to continue learning
                and growing in the industry. After graduation, he plans to move to
                Texas to work as a studio or live sound engineer. When he’s not in
                the studio, he enjoys spending time with his Shiba-Inu puppy,
                Megumi, and his girlfriend Katie.
            </p>

            <p className="text-lg text-gray-10 italic">
                Currently studying at Louisiana Tech University · Producing, mixing, and recording.
            </p>
            <h4 className="text-lg text-gray-10 italic">BA Music Industry Studies. Minor in Business Administration.</h4>

            <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-20 pt-6">
            <span className="px-3 py-1 border border-gray-20 rounded-full">Ableton Live</span>
            <span className="px-3 py-1 border border-gray-20 rounded-full">Lo-fi / R&B</span>
            <span className="px-3 py-1 border border-gray-20 rounded-full">Sound Design</span>
            </div>
        </div>
    </div>
  )
}

export default Bio
