import React from 'react';
import Masonry from 'react-masonry-css';
import './style.css'; // Optional CSS file for styling

const Gallery = () => {
  const photos = [
    'https://lh3.googleusercontent.com/pw/AIL4fc9SogyIX6ny4ZQbgrralwj5pLOsi9o8OVM589EjsByD6xn6VdxOtjoOF3hPjYkzKMhTNf04yOI1GXvjE5yJtHoKlpNC_OfvHgamP_bvgS9P237v8P3e7yfrMUzV3ue52-b31SgAlyr3As4aPUjC4Hw7Mw=w1307-h866-s-no?authuser=0',
    'https://lh3.googleusercontent.com/pw/AIL4fc_TsJBaFCCvHk5J1FFzLYXyfWdyxf9p8CTT4270nDSNaLGzPeb-L7zSlE-Jq1-2AfRpT969p8Pcukbx5nudcE8IF3CkKSR7nTrz4Vd2rVEgsayRQzOb6kWqAJljZqozsFRyavHkytIR4RkO5vYk_V_iEA=w1298-h866-s-no?authuser=0',
    'https://lh3.googleusercontent.com/pw/AIL4fc_GRrxyolH8gs2OWsQCDjrpuY5Hl286cvottivPoCoYApOMuEtdC4XYWOwJYwsbVYF9KnDuIj48ZlABrZpoTjyrHEaZB1U1xKeULgN32QuIjV7j4cYLS5uCnw6Mw-X5G1eRWs9j_dDfgbvrycfXm3EhkA=w1298-h866-s-no?authuser=0',
    'https://lh3.googleusercontent.com/pw/AIL4fc8T_ueCgrvtv2Fsn7N6bz8YRXrgvBUqzDQPATe5MoOaVhzZNzdXXQQCjm8MCY32-Gchg9o9NHmLJ0dmNBU33OApuBdZFo1PJslo-Kd_gW13eCLJxkPZI4hioaghm2ZBsI5OMRWwezP1d43GFJrJu-31eQ=w1298-h866-s-no?authuser=0',
    'https://lh3.googleusercontent.com/pw/AIL4fc_YudMtFc-91QgIGDp3d905TQLEralmyGfdz7Hh2hQqIO2SmDJrpBkfidagB9oIBm_WS_Q8gYwsHXOdCCvytPXmHvrG1PconfB3h3NtTfkrBRn89nD2SfwsuXuwTL3ci-oUnIsxox4em2VSDcwdjpMj5g=w1298-h866-s-no?authuser=0',
    'https://lh3.googleusercontent.com/pw/AIL4fc_9e9p-6U3bPZxXrG_YM40EXqN4-6ozQ8q0Z9laxylIALwz5rwC0GMk2qvhRkrNUMa64Hr9sYJ8qLrZmAMX2xHEsSrx40009SDP0B7JoIjjRV8St4yDogfPPnWwq67cq-ei0WCmJ-x9TNxRpZ35UoLsiw=w1298-h866-s-no?authuser=0',
    'https://lh3.googleusercontent.com/pw/AIL4fc8zZtf7Kfu2tun-Iu7pZeZiPaPkywz3s0SRWk6KtTTYYjTnWnxiLi1fpME4tuiSgw0qOPDh909kuABrZlYQVZ-6Rm9LaTYvmFQVjFymPWIIsnF0jN56Y9Z9T2jHHqUHSvHdIAU3qOktnkQg-m-842anfw=w1307-h866-s-no?authuser=0',
    'https://lh3.googleusercontent.com/pw/AIL4fc9kPXJCyyrUo_5eQ4nFuIpniY-IcSP85kQtNc_jRiQnrYASPmKSScG0I09m02NpYfNrN9MH02ekXygDWcxnbEbU6EObZRa5tdHTs_jQcGjvlLb-bEqjcmaVqcPn-lloyphAQ9oW2BpDjyJB5X7qGUOCHA=w1307-h866-s-no?authuser=0',
    'https://lh3.googleusercontent.com/pw/AIL4fc9f9xNfu1iTUnZAHXtvtfSdh9hHctqofYa3Sy3Rtve0CaHrKLq9ZhJ5mPkz8NVwQJXkKqcByFpV6eah0pFpswip0iQks-0O03BnjYiqSZ1ouIrzjFmd7WKi_kSHJ8CynZrfIeasau1mEVx9wT46HDMmkQ=w1307-h866-s-no?authuser=0',
    'https://lh3.googleusercontent.com/pw/AIL4fc_eQdCEWWJkbi5_ikPg88sUrV76GbOnwwBDiH14TbBSlFy2YnM9QoXzhGftEW_1gA-3p9vvKoU9jI7lFdjeSmxfIeS4eHMFZ82i5hscIPyRlVvo3INJAE0FWX_TULE5iw89sDp4M0LKD24uuLb4-g8Rqw=w1307-h866-s-no?authuser=0',
  ];

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="masonry-grid"
      columnClassName="masonry-grid-column"
    >
      {photos.map((photo, index) => (
        <img key={index} src={photo} alt={`church ${index + 1}`} />
      ))}
    </Masonry>
  );
};

export default Gallery;
