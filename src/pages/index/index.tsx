import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import Search from './search'
import './index.scss'

export default function Index () {
  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='index'>
      
      <Search />
      <Text>我是小程序1</Text>
    </View>
  )
}
