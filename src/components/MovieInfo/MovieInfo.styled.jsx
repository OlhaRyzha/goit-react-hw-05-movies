import styled from '@emotion/styled';

export const MovieWrapper = styled.div`
  background: #fff;
  max-width: 600px;
  border-radius: 10px;
  box-shadow: 1px 1px 2rem rgba(0, 0, 0, 0.3);
  position: relative;
  margin-left: auto;
  margin-right: auto;
`;

export const MovieDescription = styled.div`
  padding: 50px 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const Poster = styled.div`
  border-radius: 8px;
  z-index: 10;
  box-shadow: 1px 1px 2rem rgba(0, 0, 0, 0.3);
  border: 4px solid #fff;
  position: absolute;
  left: -29%;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  width: 257px;
  height: 385px;
  position: relative;
  border-radius: 8px;
  box-shadow: 1px 1px 2rem rgba(0, 0, 0, 0.3);
  z-index: 1;
`;

export const MovieTitle = styled.h3`
  margin: 0 0 0.5rem 0;
  color: #999;
  font-size: 1.25rem;
  margin: 0;
`;

export const MovieScore = styled.h1`
  text-align: center;
  margin-left: 30px;
  font-size: 2rem;
  letter-spacing: 0.5px;
  color: #333;
`;

export const MovieDetail = styled.p`
  text-align: center;
  font-size: 1.25rem;
  color: #999;
`;

export const Accent = styled.span`
  color: #000;
  font-size: 1rem;
`;
