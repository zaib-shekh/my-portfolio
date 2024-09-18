import lnct from '../assets/lnct.png';
import staragile from '../assets/staragile.jpg';
import bethel from '../assets/bethel.png';
import rcschool from '../assets/rcschool.jpg'
import degree from '../assets/degree.jpg';
import tenth from '../assets/10th.jpg';
import ssc from '../assets/12th.jpg';
import star from '../assets/star.jpg';
const EducationData = [
    {
      dateRange: '2023 - 2024',
      degree: 'Data Science Certification',
      institution: 'StarAgile',
      logo: staragile,
      certificationLink: star 
    },
    {
      dateRange: '2018 - 2022',
      degree: 'B.Tech in Computer Science and Engineering',
      institution: 'LNCT University',
      logo: lnct,
      certificationLink: degree
    },
    {
        dateRange: '2017 - 2018',
        degree: 'Senior Secondary Certification With Science',
        institution: 'Bethel Mission HR. SEC. School',
        logo: bethel,
        certificationLink: ssc
      },
      {
        dateRange: '2015 - 2016',
        degree: 'All India Secondary School Examination',
        institution: 'RC English Medium HR. SEC. School',
        logo: rcschool,
        certificationLink: tenth
      }

  ];
  
  export default EducationData;
  