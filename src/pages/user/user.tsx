import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './user.scss'

export default function Index () {
  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='index'>
      <Text>我是小程序3</Text>
    </View>
  )
}
