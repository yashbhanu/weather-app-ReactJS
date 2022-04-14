import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Card } from 'semantic-ui-react'
import { Input } from 'semantic-ui-react'

function SearchForm() {
  return (
    <div>
        <Card>
            <Card.Content>
                <Input placeholder="Search"></Input>
            </Card.Content>
        </Card>
    </div>
  )
}

export default SearchForm;