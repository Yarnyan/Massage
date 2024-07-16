echo "Building the React application..."

yarn

yarn run build

echo "Refresh data..."

rm -rf /var/www/bless/*
cp -r dist/* /var/www/bless/

echo "Restarting Nginx..."

sudo systemctl restart nginx

echo "Deployment complete."