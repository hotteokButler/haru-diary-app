import styled from 'styled-components';

const CalenderTitle = styled.h2`
  position: relative;
  padding: 0.5em 1em;
  margin: 0 0 1em;
  font-size: 1.2rem;
  border-bottom: 1px solid ${(props) => props.theme.liBgColor};
  text-align: center;
`;

const CalenderButton = styled.button`
  display: inline-block;
  margin: 0 1em;
  padding: 0.2em 0.5em 0.5em 0.5em;
  color: ${(props) => props.theme.accentColor};
  cursor: pointer;
  background-color: transparent;
  vertical-align: middle;
  &:hover {
    color: ${(props) => props.theme.pinkBeigeColor};
  }
`;

const CalenderBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: ${(props) => props.theme.mainBoardColor};
  padding: 0.5em;
  text-align: right;
  border-radius: 4px;
  p {
    font-size: 12px;
    padding: 0.5em;
    width: calc(100% / 7);
    height: 55px;
    cursor: pointer;
    &:hover {
      background-color: ${(props) => props.theme.bgColor};
      color: ${(props) => props.theme.accentColor};
    }
  }
  p.Day {
    font-size: 14px;
    height: 35px;
    cursor: default;
    &:hover {
      background-color: ${(props) => props.theme.mainBoardColor};
    }
  }
`;

const Calender = () => {
  return (
    <>
      <CalenderTitle>
        <CalenderButton>
          <i className="fa-solid fa-angle-left"></i>
        </CalenderButton>
        April
        <CalenderButton>
          <i className="fa-solid fa-angle-right"></i>
        </CalenderButton>
      </CalenderTitle>
      <CalenderBox>
        <p className="Day">Sun</p>
        <p className="Day">Mon</p>
        <p className="Day">Thu</p>
        <p className="Day">Wed</p>
        <p className="Day">Thr</p>
        <p className="Day">Fri</p>
        <p className="Day">Sat</p>
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
        <p>6</p>
        <p>7</p>
        <p>8</p>
        <p>9</p>
        <p>10</p>
        <p>11</p>
        <p>12</p>
        <p>13</p>
        <p>14</p>
        <p>15</p>
        <p>16</p>
        <p>17</p>
        <p>18</p>
        <p>19</p>
        <p>20</p>
        <p>21</p>
        <p>22</p>
        <p>23</p>
        <p>24</p>
        <p>25</p>
        <p>26</p>
        <p>27</p>
        <p>28</p>
        <p>29</p>
        <p>30</p>
        <p>31</p>
      </CalenderBox>
    </>
  );
};

export default Calender;
