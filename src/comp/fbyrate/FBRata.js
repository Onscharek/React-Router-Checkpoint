import React from 'react';
import { FrownOutlined, MehOutlined, SmileOutlined } from '@ant-design/icons';
import { Rate } from 'antd';


const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

const customIcons = {
    1: <FrownOutlined />,
    2: <FrownOutlined />,
    3: <MehOutlined />,
    4: <SmileOutlined />,
    5: <SmileOutlined />,
  };
const FBRata = ({isMovieRating,rating,setRating,movieRating}) => {
    // const [value, setValue] = useState(3);
const handleChange =(value)=>{
  setRating(value);
};

  return isMovieRating ? (
    <div>
 <Rate  disabled  value={movieRating} defaultValue={3} character={({ index = 0 }) => customIcons[index + 1]} />
    </div>
  ):(
    <div>
    <Rate tooltips={desc} onChange={handleChange} value={rating} defaultValue={3} character={({ index = 0 }) => customIcons[index + 1]} />
</div>
  )  
}

export default FBRata