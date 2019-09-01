import React from 'react';
import { StyleSheet, Text, View, Platform, TouchableOpacity, ScrollView, Dimensions} from 'react-native';
import { Button } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
const { width } = Dimensions.get('window');


export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.mainTitle}>My Expenses</Text>
        <Text style={styles.summarySubTitle}>Summary (private)</Text>
        <View style={styles.expenseDate}> 
          <View style={styles.col}> 
          <Ionicons   name={Platform.select({
                        ios: 'ios-calendar',
                        android: 'md-calendar',
                      })}
                      size={32} color="#92A8B4"/>
          </View>
          <View style={styles.col}>
          <Text style={styles.expenseDateTextMain}>07 Feb, 2019</Text>
          <Text style={styles.expenseDateTextSub}>18% more than last time</Text>
          </View>
        </View>
      </View>
      
      <View style={styles.categoriesContainer}>
         <View style={styles.row}>
              <View style={styles.col}>
                  <View style={styles.row}>
                      <Text style={styles.categoriesMainTitle}>
                        CATEGORIES
                      </Text>
                  </View>
                  <View style={styles.row}>
                      <Text style={styles.summarySubTitle}>
                        7 Total
                      </Text>
                  </View>   
              </View>
              <View style={[styles.col, styles.categoriesIcons]}>
                <TouchableOpacity> 
                <Ionicons   name={Platform.select({
                          ios: 'ios-stats',
                          android: 'md-stats',
                        })}
                        size={32} color="#92A8B4"/>
                </TouchableOpacity>
              </View>
              <View style={[styles.col, styles.categoriesIcons]}>
              <TouchableOpacity> 
                <Ionicons   name={Platform.select({
                          ios: 'ios-list',
                          android: 'md-list',
                        })}
                        size={32} color="#92A8B4"/>
                </TouchableOpacity>
              </View>
         </View>

         <View style={styles.row}>
         <View style={[styles.col, styles.buttonLabelsPosition]}>
            <Button 
            buttonStyle={styles.buttonLabelsShadow}
            titleStyle={styles.buttonLabelsTitle}
            title='Education'
            type='outline'
            icon= {
              <Ionicons   
              name={Platform.select({
                ios: 'ios-school',
                android: 'md-school',
              })}
              size={24} 
              color="#FDC601"/>
            }>
            </Button>
           </View>
           <View style={[styles.col, styles.buttonLabelsPosition]}>
            <Button 
            buttonStyle={styles.buttonLabelsShadow}
            titleStyle={styles.buttonLabelsTitle}
            title='Nutrition'
            type='outline'
            icon= {
              <Ionicons   
              name={Platform.select({
                ios: 'ios-nutrition',
                android: 'md-nutrition',
              })}
              size={24} 
              color="#86D1DF"/>
            }>
            </Button>
          </View>
         </View>
         
         <View style={styles.row}>
         <View style={[styles.col, styles.buttonLabelsPosition]}>
            <Button 
            buttonStyle={styles.buttonLabelsShadow}
            titleStyle={styles.buttonLabelsTitle}
            title='Child'
            type='outline'
            icon= {
              <Ionicons   
              name={Platform.select({
                ios: 'ios-sad',
                android: 'md-sad',
              })}
              size={24} 
              color="#038154"/>
            }>
            </Button>
           </View>
           <View style={[styles.col, styles.buttonLabelsPosition]}>
            <Button 
            buttonStyle={styles.buttonLabelsShadow}
            titleStyle={styles.buttonLabelsTitle}
            title='Beauty & Care'
            type='outline'
            icon= {
              <Ionicons   
              name={Platform.select({
                ios: 'ios-flower',
                android: 'md-flower',
              })}
              size={24} 
              color="#FD635C"/>
            }>
            </Button>
             
             </View>
         </View>
         
      </View>

      <View style={styles.incomingExpenses}>
            <Text style={styles.categoriesMainTitle}>
              INCOMING EXPENSES
            </Text>
            <Text style={styles.summarySubTitle}>
              12 Total
            </Text>
         <View style={styles.row}>
         <ScrollView
        ref={(scrollView) => { this.scrollView = scrollView; }}
        //pagingEnabled={true}
        horizontal= {true}
        decelerationRate={0}
        snapToInterval={width - 60}
        snapToAlignment={"center"}
        contentInset={{
          top: 0,
          left: 30,
          bottom: 0,
          right: 30,
        }}>
        <View style={styles.view}>
                    
          <View style={[styles.row, styles.expensesCardHeader]}>
          <Ionicons   
              name={Platform.select({
                ios: 'ios-flower',
                android: 'md-flower',
              })}
              size={24} 
              color="#FD635C"/>
            <Text style={styles.expensesCardTitle}>
              BEAUTY & CARE
            </Text>
          </View>
          <Text style={styles.expensesCardHeader}>
            Dermal Softening
          </Text>
          <Text style={styles.expenseCardDescription}>
          Lorem tting industryndard dummy text ever since the 1500s, when an unknown printer took a galley
          </Text>
          <Text style={styles.expenseCardLocation}>
            Location
          </Text>
          <Text style={styles.expenseCardDescription}>
            address here
          </Text>
          <View style={styles.expensesCardConfirm}>
          <Text style={styles.expensesCardConfirmText}>
            CONFIRM 12 $
          </Text>
          </View>
        </View>

        <View style={styles.view2} />
        <View style={styles.view} />
        <View style={styles.view2} />
        <View style={styles.view} />
      </ScrollView>
         </View>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    paddingTop: 70,
    
  },
  mainTitle: {
    color: '#355970',
    fontSize: 22,
    fontFamily: 'sans-serif',
    marginLeft: 16,
  },
  categoriesMainTitle: {
    color: '#355970',
    fontSize: 15,
    fontFamily: 'sans-serif',
    marginLeft: 16,
    marginRight: 170,
  },
  summarySubTitle: {
    fontSize: 14,
    color: '#92A8B4',
    fontFamily: 'sans-serif',
    marginLeft: 16,
  },
  expenseDate: {
    marginLeft: 16,
    marginTop: 32,
    flexDirection: 'row',
    paddingBottom: 13,

  },
  categoriesContainer: {
    flex: 2,
    justifyContent: 'space-around',
    backgroundColor: '#FAFCFE',
    paddingTop: 10,
  },
  categoriesIcons: {
    marginStart: 32,
    marginBottom: 20,
  },

  incomingExpenses: {
    flex: 3,
    backgroundColor: '#FAFCFE',
    paddingTop: 42,
  },
  expensesCardHeader: {
    marginLeft: 16,
    marginTop: 16,
    fontWeight: 'bold',
    color: '#355970',
    fontSize: 15,
    fontFamily: 'sans-serif',
  },
  expenseCardLocation: {
    color: '#355970',
    fontSize: 12,
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    marginLeft: 16,
    marginTop: 16,
  },
  expenseCardDescription: {
    color: '#355970',
    fontSize: 12,
    fontFamily: 'sans-serif',
    marginLeft: 16,
  },
  expensesCardTitle: {
    marginLeft: 16,
    color: '#FD635C',
  },
  expensesCardConfirm: {
    backgroundColor:'#FD635C',
    paddingBottom: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  expensesCardConfirmText: {
    marginTop: 8,
    textAlign: 'center',
    color: '#fff',
  },
  expenseDateTextMain: {
    fontSize: 14,
    marginLeft: 16,
    color: '#92A8B4',
    fontFamily: 'sans-serif',
    flexDirection: 'row',
    fontWeight: 'bold',

  },
  expenseDateTextSub: {
    fontSize: 14,
    marginLeft: 16,
    color: '#92A8B4',
    fontFamily: 'sans-serif',
    flexDirection: 'row',
  },
  buttonLabelsPosition: {
    margin: 'auto',
    width: 200,
    paddingRight: 2,
    paddingLeft: 16,
  },
  buttonLabelsShadow: {
    borderColor: '#fff',
    backgroundColor: '#fff',
    elevation: 1,
  },
  buttonLabelsTitle: {
    marginLeft: 10,
    color: '#355970',
    // TODO: text align stuff to left
  },
  col: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
  },
  view: {
    // marginTop: 100,
    backgroundColor: 'white',
    width: width - 100,
    margin: 10,
    height: 200,
    borderRadius: 30,
    elevation: 5,
    // alignItems: 'flex-start',
    //paddingHorizontal : 30
  },
  view2: {
    // marginTop: 100,
    backgroundColor: 'white',
    width: width - 100,
    margin: 10,
    // marginLeft: -10,
    height: 200,
    borderRadius: 30,
    elevation: 1,
    //paddingHorizontal : 30
  },
});
