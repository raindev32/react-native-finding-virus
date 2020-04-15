import React, { Component } from 'react'
import { withNavigation } from 'react-navigation'
import { connect } from 'react-redux'
import { Field, reduxForm, getFormValues } from 'redux-form'
import {
  View, StyleSheet, ScrollView, RefreshControl
} from 'react-native'
import { getCountCases } from 'actions/countCases/countCasesAction'
// import { getCountries } from 'actions/countries/countriesAction'

import Dropdown from 'components/Form/Dropdown'
import Medicine from './Medicine'
import CountCases from './Cases'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10
  }
})

class Detail extends Component {
  state = {
    refreshing: false
  }

  componentDidMount () {
    this._refresh()
  }

  _refresh = () => {
    // this.getCountry()
    this.getDataCases()
  }

  // getCountry = async () => {
  //   const { dispatch } = this.props
  //   await dispatch(getCountries())
  // }

  getDataCases = async () => {
    const { dispatch } = this.props
    await dispatch(getCountCases({ country: 'Indonesia' }))
  }

  render () {
    const { currentItem, countries } = this.props
    const { refreshing } = this.state

    return (
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          removeClippedSubviews
          refreshControl={(
            <RefreshControl
              refreshing={refreshing}
              onRefresh={() => this._refresh()}
            />
          )}
        >
          <Medicine />
          <CountCases data={currentItem || {}} />
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  values: getFormValues('selectCountriesForm')(state),
  loading: state.countCasesStore.loading,
  meta: state.countCasesStore.meta,
  currentItem: state.countCasesStore.currentItem,
  countries: state.countriesStore.countries,
  errorMessage: state.countCasesStore.errorMessage
})

export default reduxForm({
  form: 'selectCountriesForm'
})(withNavigation(connect(mapStateToProps)(Detail)))
