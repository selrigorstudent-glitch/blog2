import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Sean Eric L. Rigor</title>
        <meta name="description" content="Personal website of Sean Eric L. Rigor." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main>
        <Image
          src="/images/profile.jpg"
          alt="Sean Eric L. Rigor"
          width={170}
          height={170}
          priority
          className="profile"
        />

        <h1>Sean Eric L. Rigor</h1>

        <p>
          Hi! I'm Sean, an Information Technology student who enjoys exploring technology,
          DJing, riding motorcycles, and listening to music. In my free time, I enjoy listening
          to music, making song remixes, riding around the city, and discovering new music,
          especially Classic rock, Emo, Punk and artists like MCR, FOB, and Bryan Adams.
        </p>

        <p>
          My favorite food is usually anything sweet, spicy, and savory, which is something I
          could never get tired of.
        </p>

        <p>
          In five years, I see myself working successfully in the IT industry, building my skills
          and experience, creating meaningful projects, and pursuing a career that allows me to
          grow while continuing to enjoy the things I love.
        </p>

        <h2>Why I Chose My IT Specialization</h2>

        <p>
          I chose Cybersecurity as the IT specialization I want to explore because so much of our
          everyday life now depends on technology and digital information. Businesses, schools,
          banks, and other organizations need to protect their systems and the information they
          handle.
        </p>

        <p>
          What interests me most is the real-world problem of keeping people and systems safe from
          unauthorized access, scams, malware, and other cyber threats. I like learning how systems
          work, finding possible weaknesses, and understanding how those weaknesses can be protected.
        </p>

        <p>
          The growth of cloud services, mobile technology, artificial intelligence, and online
          services also creates new security challenges. I want to develop the skills needed to
          understand these risks and help create safer digital environments.
        </p>

        <p>
          (This is a sample website - you’ll be building a site like this on our Next.js tutorial.)
        </p>
      </main>
    </>
  )
}
