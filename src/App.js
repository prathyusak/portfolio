import React,{useState,useRef,useEffect} from 'react';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import resumeData from './resumeData';
export default function App () {
  const [scrolled,setScrolled]=useState(false);
 const [visibleSection, setVisibleSection] = useState();
 const headerRef = useRef(null);
  const post1Ref=useRef(null);
  const post2Ref=useRef(null);
  const post3Ref=useRef(null);
  const post4Ref=useRef(null);
  const post5Ref=useRef(null);
  const sectionRefs = [
    { section: "home", ref: post1Ref },
    { section: "about", ref: post2Ref },
    { section: "resume", ref: post3Ref },
    { section: "portfolio", ref: post4Ref },
    { section: "contact", ref: post5Ref },
  ];
  let navbarClasses=['navbar'];
  const getDimensions = (ele) => {
    const { height } = ele.getBoundingClientRect();
    const offsetTop = ele.offsetTop;
    const offsetBottom = offsetTop + height;

    return {
      height,
      offsetTop,
      offsetBottom,
    };
  };
 
  if(scrolled){
    navbarClasses.push('scrolled');
  }

  const handleScroll = () => {
    const { height: headerHeight } = getDimensions(headerRef.current);
    const scrollPosition = window.scrollY + headerHeight;
    console.log(scrollPosition)
    const offset=window.scrollY;
    setScrolled(offset > headerHeight);
    const selected = sectionRefs.find(({ section, ref }) => {
      const ele = ref.current;
      if (ele) {
        const { offsetBottom, offsetTop } = getDimensions(ele);
        return scrollPosition > offsetTop && scrollPosition < offsetBottom;
      } else {
        return undefined
      }
    });

    if (selected && selected.section !== visibleSection) {
      setVisibleSection(selected.section);
    } else if (!selected && visibleSection) {
      setVisibleSection(undefined);
    }
    console.log(visibleSection)
  };
useEffect(() => {
   window.addEventListener("scroll", handleScroll);
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, [visibleSection]);

   return (
      <div className="App">
        <div ref={post1Ref}>
           <Header resumeData={resumeData} navbarClasses={navbarClasses} headerRef={headerRef} visibleSection={visibleSection} />
        </div>
        <div ref={post2Ref}>
           <About resumeData={resumeData} />
        </div>
        <div ref={post3Ref}>
           <Resume resumeData={resumeData} />
        </div>
        <div ref={post4Ref}>
        <Portfolio resumeData={resumeData} />
        </div>
        <div ref={post5Ref}>
          <ContactUs resumeData={resumeData} />
          <Footer resumeData={resumeData} />
        </div>
      </div>
    );
  }
