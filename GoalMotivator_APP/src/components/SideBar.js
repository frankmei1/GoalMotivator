import { SideMenu, Icon, List, View, ListItem } from 'react-native-elements'
import * as React from 'react';


export default function CustomedSideBar({props}) {
    const [open, setOpen] = React.useState(false);
    const handleCloseOrOpen = () => {
        setOpen(!open);
    };
    const list = [
        {
          name: 'Qingtian Mei',
          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
          subtitle: 'Member'
        },
        {
          name: 'Chris Jackson',
          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
          subtitle: 'Member'
        }
      ]
    const MenuComponent = (
        <View style={{ flex: 1, backgroundColor: '#ededed', paddingTop: 50 }}>
            <List containerStyle={{ marginBottom: 20 }}>
                {
                    list.map((l, i) => (
                        <ListItem
                            roundAvatar
                            onPress={() => console.log('Pressed')}
                            avatar={l.avatar_url}
                            key={i}
                            title={l.name}
                            subtitle={l.subtitle}
                        />
                    ))
                }
            </List>
        </View>)
        
    return (
        <SideMenu
            isOpen={open}
            menu={MenuComponent}>
                
            <Icon name='menu'
                color='white' onPress={() => { handleCloseOrOpen }} />
        </SideMenu>
    )
}