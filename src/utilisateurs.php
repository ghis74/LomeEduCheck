<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gestion des Utilisateurs</title>
    <style>
    body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 20px;
        background-color: #f7f7f7;
    }

    table {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 20px;
    }

    th,
    td {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
    }

    th {
        background-color: #f2f2f2;
    }

    form {
        display: inline-block;
    }

    button {
        padding: 5px 10px;
        border: none;
        border-radius: 3px;
        background-color: #5cb85c;
        color: white;
        cursor: pointer;
    }

    button.delete {
        background-color: #d9534f;
    }

    .message {
        margin-bottom: 20px;
        padding: 10px;
        border: 1px solid #ddd;
        background-color: #f9f9f9;
    }
    </style>
</head>

<body>

    <h2>Gestion des Utilisateurs</h2>
    <div class="message">
        <?php
        include '../';

        // Afficher le nombre d'utilisateurs
        $count_sql = "SELECT COUNT(*) as total FROM utilisateurs";
        $count_result = $conn->query($count_sql);
        $count_row = $count_result->fetch_assoc();
        echo "Nombre total d'utilisateurs : " . $count_row['total'];

        // Message de confirmation pour la modification et la suppression
        if (isset($_GET['message'])) {
            echo "<p>" . htmlspecialchars($_GET['message']) . "</p>";
        }
        ?>
    </div>

    <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Nom</th>
                <th>Prénoms</th>
                <th>Téléphone</th>
                <th>Email</th>
                <th>Adresse</th>
                <th>Rôle</th>
                <th>Confirmations</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <?php
            // Connexion à la base de données
            $sql = "SELECT * FROM utilisateurs";
            $result = $conn->query($sql);

            if ($result->num_rows > 0) {
                while ($row = $result->fetch_assoc()) {
                    echo "<tr>";
                    echo "<td>" . $row['Id_utilisateurs'] . "</td>";
                    echo "<td>" . $row['nom'] . "</td>";
                    echo "<td>" . $row['prenoms'] . "</td>";
                    echo "<td>" . $row['telephone'] . "</td>";
                    echo "<td>" . $row['email'] . "</td>";
                    echo "<td>" . $row['adresse'] . "</td>";
                    echo "<td>" . $row['Id_roles'] . "</td>";
                    echo "<td>" . $row['Id_confirmations'] . "</td>";
                    echo "<td>";
                    echo "<form method='post' action='edit_user.php' style='display:inline;'>";
                    echo "<input type='hidden' name='id' value='" . $row['Id_utilisateurs'] . "'>";
                    echo "<button type='submit'>Modifier</button>";
                    echo "</form>";
                    echo "<form method='post' action='delete_user.php' style='display:inline;'>";
                    echo "<input type='hidden' name='id' value='" . $row['Id_utilisateurs'] . "'>";
                    echo "<button type='submit' class='delete'>Supprimer</button>";
                    echo "</td>";
                    echo "</tr>";
                }
            } else {
                echo "<tr><td colspan='9'>Aucun utilisateur trouvé</td></tr>";
            }
            $conn->close();
            ?>
        </tbody>
    </table>

</body>

</html>