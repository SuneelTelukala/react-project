
export function DataGrid(Props){
    return(
        <div>
            <table>
                <caption>{props.caption}</caption>
                <thead>
                    <tr>
                        {
                        props.field.map(field=>
                            <th key={field}>{field}<button className="bi bi-sort-alpha-down btn btn"></button></th>
                            )
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        props.data.map(item=>
                            <tr key={item}>
                                {
                                    objects.keys(item).map(key=>
                                        <td key={key}>{item[key]}</td>
                                        )
                                }
                            </tr>
                            
                            
                            )

                    }
                </tbody>
            </table>
        </div>
    )
}