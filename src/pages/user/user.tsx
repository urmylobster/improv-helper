import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './user.scss'

export default function Index () {
  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='index'>
      <Text></Text>
    </View>
  )
}
