import styled from '@emotion/native'

export const Container = styled.View`
    flex: 1;
    background-color: #0D0D0C;
    align-items: center;
    justify-content: center;
`

export const Profile = styled.View`
    flex-direction: row;
`

type SizeProps = {
    size: '16px'
}

export const Title = ({size}: SizeProps) => {
    return <Title size={size}></Title>
}
