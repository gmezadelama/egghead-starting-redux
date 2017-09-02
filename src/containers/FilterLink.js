import React, { Component } from 'react'
import { connect } from 'react-redux'

const Link = ({
    active,
    children,
    onClick
  }) => {
  if (active) {
    return <span>{children}</span>
  }
  return (
    <a href='#'
       onClick={e => {
         e.preventDefault()
         onClick()
       }}
    >
      {children}
    </a>
  );
};

class FilterLink extends Component {
  render () {
    let {
      active,
      onClick,
      children
    } = this.props
    return (
      <Link
        active={ active }
        onClick={ onClick }
      >
        {children}
      </Link>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch({
        type: 'SET_VISIBILITY_FILTER',
        filter: ownProps.filter
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterLink)
