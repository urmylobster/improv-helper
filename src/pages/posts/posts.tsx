import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './posts.scss'

export default function Index () {
  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='index'>
      <Text>我是小程序2</Text>
    </View>
  )
}
