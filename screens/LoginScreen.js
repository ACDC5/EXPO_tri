import  React,{Component} from 'react';
import { Image, ImageBackground, Dimensions, Platform,
         StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import {Button} from "react-native-web";

const {width, height} = Dimensions.get("window");

export class  LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
            register: '',
            forget_pwd: '',
            errInfo:'',
        }
    }


    render() {
        const {navigation, route} = this.props;
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.edit}
                    placeholder="账号"
                    onChangeText={(account) => this.setState({userName:account})}
                    placeholderTextColor="#000"
                />
                <TextInput
                    style={styles.edit}
                    placeholder="密码"
                    secureTextEntry={true}
                    onChangeText={(pwd) => this.setState({password:pwd})}
                    placeholderTextColor="#000"
                />
                <TouchableOpacity activeOpacity={.7} onPress={this.out.bind(this)}>
                    <View style={styles.button}>
                        <Text>登录</Text>
                    </View>
                </TouchableOpacity>


                <Text style={{marginTop:10}}>
                    结果:{this.state.errInfo}
                </Text>

            </View>
        );
    }

    out() {
        const objectId = 1000;
        const actionId = 1005;
        const screenWidth = 1920;
        const ott= '';
        const screenHeight= 1080;
        const screenDPI = 96;
        const contentType = '/html/en';
        const languageId = 1;
        const ieFlag = 0;
        const ExtReqURL = '';



        const cstUrl = 'http://intalenttech.cn/Authenticate.srv';
        fetch(cstUrl, {
            method: "POST",
            headers: {
                // "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                "Content-Type": "application/x-www-form-urlencoded",
                "Host": "intalenttech.cn",
                // "Connection":"keep-alive",
                "Referer":"http://intalenttech.cn/html/en/default/login/loginMain.jsp",
                "User-Agent":"User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36",
            },
            body: 'objectId&'+objectId +
                  'actionId&'+actionId +
                  'screenWidth&'+screenWidth +
                  'ott&'+ott +
                  'screenHeight&'+screenHeight +
                  'screenDPI&'+screenDPI +
                  'contentType&'+contentType +
                  'languageId&'+languageId +
                  'ieFlag&'+ieFlag +
                  'ExtReqURL&'+ExtReqURL +
                  'USERNAME=' + this.state.userName + '&PASSWORD=' + this.state.password,
        })
            .then((response) =>JSON.stringify(response)) // 从对象中字符串化返回的数据

            .then((responseData) => {       // 获取格式化后的数据
                //解析成json对象
                console.log('aa####'+responseData+1)//返回object
                const final = JSON.parse(responseData,);
                console.log(typeof final + '-----------' +final)
                this.setState({errInfo:final})
            })
            .catch((error) => { // 错误处理
                console.log(error)
                this.setState({errInfo:error})
            })
        console.log(this.state.userName);
        console.log(this.state.password);
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
        marginTop: 107,
        // backgroundColor:'#FFFFFF',
    },

    edit:{
        marginTop:30,
        height:40,
        fontSize:20,
        backgroundColor:'#fff'
    },
    button:{
        marginTop:27,
        backgroundColor: '#993366',
        flexDirection: 'row',
        justifyContent:'center',
        paddingVertical:17,
        borderRadius:7,
    }
});

